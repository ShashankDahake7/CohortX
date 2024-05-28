import { useEffect, useRef, useState } from "react";

export const Receiver = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playRequested, setPlayRequested] = useState(false);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'receiver'
            }));
        };
        startReceiving(socket);
    }, []);

    function startReceiving(socket: WebSocket) {
        const pc = new RTCPeerConnection();
        pc.ontrack = (event) => {
            const stream = new MediaStream();
            event.streams[0].getTracks().forEach(track => {
                stream.addTrack(track);
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                // Check if play has been requested and if the video element is ready
                if (playRequested && videoRef.current.readyState >= videoRef.current.HAVE_ENOUGH_DATA) {
                    videoRef.current.play().catch(error => console.error('Error playing video:', error));
                }
            }
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createOffer') {
                pc.setRemoteDescription(new RTCSessionDescription(message.sdp)).then(() => {
                    pc.createAnswer().then((answer) => {
                        pc.setLocalDescription(answer);
                        socket.send(JSON.stringify({
                            type: 'createAnswer',
                            sdp: answer
                        }));
                    });
                });
            } else if (message.type === 'iceCandidate') {
                pc.addIceCandidate(new RTCIceCandidate(message.candidate));
            }
        };
    }

    const requestPlay = () => {
        setPlayRequested(true);
    };

    return (
        <div>
            <h2>Receiver</h2>
            <video ref={videoRef} autoPlay playsInline onClick={requestPlay} />
        </div>
    );
};

// If video not played on receiver end
// in console - 
// document.querySelector('video').play();