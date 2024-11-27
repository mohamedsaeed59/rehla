class WebSocketService {
    private socket: WebSocket | null = null;
  
    connect(url: string) {
      this.socket = new WebSocket(url);
  
      this.socket.onopen = () => {
        console.log("WebSocket connection established");
      };
  
      this.socket.onmessage = (event) => {
        console.log("Message received:", event.data);
      };
  
      this.socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
  
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  
    send(data: any) {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(data));
      } else {
        console.error("WebSocket is not open");
      }
    }
  
    disconnect() {
      this.socket?.close();
    }
  }
  
  const webSocketService = new WebSocketService();
  export default webSocketService;
  