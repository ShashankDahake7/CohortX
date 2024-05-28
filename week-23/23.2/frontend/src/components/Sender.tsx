import { useEffect, useState } from "react";

export const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [pc, setPC] = useState<RTCPeerConnection | null>(null);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        setSocket(socket);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'sender'
            }));
        };
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                setLocalStream(stream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };
        getCameraStream();
        return () => {
            if (socket) {
                socket.close();
            }
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const initiateConn = async () => {
        if (!socket) {
            alert("Socket not found");
            return;
        }

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createAnswer') {
                await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
            } else if (message.type === 'iceCandidate') {
                await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
            }
        };

        const pc = new RTCPeerConnection();
        setPC(pc);
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.send(JSON.stringify({
                    type: 'iceCandidate',
                    candidate: event.candidate
                }));
            }
        };

        pc.onnegotiationneeded = async () => {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket.send(JSON.stringify({
                type: 'createOffer',
                sdp: pc.localDescription
            }));
        };

        if (localStream) {
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream);
            });
        }
    };

    return (
        <div>
            <h2>Sender</h2>
            {localStream && (<video autoPlay playsInline ref={(video) => {
                if (video) {
                    video.srcObject = localStream;
                }
            }}
            />
            )}
            <button onClick={initiateConn}>Send data</button>
        </div>
    );
};
