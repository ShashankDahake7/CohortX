Why WebRTC?
WebRTC is the core/only protocol that lets you do real time media communication from inside a browser.
 
We already did this fairly well in a live stream 
https://github.com/hkirat/omegle/tree/master
https://www.youtube.com/watch?v=0MIsI2xh9Zk
 
You use WebRTC for applications that require sub second latency. 
Examples include
Zoom/Google meet (Multi party call)
Omegle, teaching (1:1 call)
30FPS games (WebRTC can also send data)

WebRTC Architecture/jargon
 
P2P
WebRTC is a peer to peer protocol. This means the you directly send your media over to the other person without the need of a central server
notion image
💡
You do need a central server for signalling and sometimes for sending media as well (turn). We’ll be discussing this later
Signalling server
Both the browsers need to exchange their address before they can start talking to each other. A signaling server is used for that. 
It is usually a websocket server but can be anything (http)
notion image
 
Stun (Session Traversal Utilities for NAT)
It gives you back your publically accessable IPs. It shows you how the world sees you
Check https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/
notion image
 
notion image
Ice candidates
ICE (Interactive Connectivity Establishment) candidates are potential networking endpoints that WebRTC uses to establish a connection between peers. Each candidate represents a possible method for two devices (peers) to communicate, usually in the context of real-time applications like video calls, voice calls, or peer-to-peer data sharing.
 
If two friends are trying to connect to each other in a hostel wifi , then they can connect via their private router ice candidates. 

If two people from different countries are trying to connect to each other, then they would connect via their public IPs.
Turn server
A lot of times, your network doesn’t allow media to come in from browser 2 . This depends on how restrictive your network is 
Since the ice candidate is discovered by the stun server, your network might block incoming data from browser 2 and only allow it from the stun server
 
notion image
Offer
The process of the first browser (the one initiating connection) sending their ice candidates to the other side.
Answer
The other side returning their ice candidates is called the answer.
SDP - Session description protocol
A single file that contains all your 
ice candidates
what media you want to send, what protocols you’ve used to encode the media
This is the file that is sent in the offer and received in the answer
Example
v=0
o=- 423904492236154649 2 IN IP4 127.0.0.1
s=-
t=0 0
m=audio 49170 RTP/AVP 0
c=IN IP4 192.168.1.101
a=rtpmap:0 PCMU/8000
a=ice-options:trickle
a=candidate:1 1 UDP 2122260223 192.168.1.101 49170 typ host
a=candidate:2 1 UDP 2122194687 10.0.1.1 49171 typ host
a=candidate:3 1 UDP 1685987071 93.184.216.34 49172 typ srflx raddr 10.0.1.1 rport 49171
a=candidate:4 1 UDP 41819902 10.1.1.1 3478 typ relay raddr 93.184.216.34 rport 49172
Copy
 
RTCPeerConnection (pc, peer connection)
https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
This is a class that the browser provides you with which gives you access to the sdp, lets you create answers / offers , lets you send media.
This class hides all the complexity of webrtc from the developer
Summary
You need a signaling server, stun server to initiate the webrtc conn b/w the parties. You can kill these once the conn is made.
You need to include a turn server incase any of the users are on a restrictive network so you can get back a turn ice candidate as well.
 
 Connecting the two sides
The steps to create a webrtc connection between 2 sides includes - 
 
Browser 1 creates an RTCPeerConnection
Browser 1 creates an offer
Browser 1 sets the local description to the offer
Browser 1 sends the offer to the other side through the signaling server
Browser 2 receives the offer from the signaling server
Browser 2 sets the remote description to the offer
Browser 2 creates an answer
Browser 2 sets the local description to be the answer
Browser 2 sends the answer to the other side through the signaling server
Browser 1 receives the answer and sets the remote description
 
This is just to establish the p2p connection b/w the two parties
 
To actually send media, we have to 
Ask for camera /mic permissions
Get the audio and video streams
Call addTrack on the pc
This would trigger a onTrack callback on the other side

Implementation
We will be writing the code in 
Node.js for the Signaling server. It will be a websocket server that supports 3 types of messages
createOffer
createAnswer
addIceCandidate
React + PeerConnectionObject on the frontend
 
We’re actually building a slightly complex version of https://jsfiddle.net/rainzhao/3L9sfsvf/ 