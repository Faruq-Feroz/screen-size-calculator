import { useState, useEffect } from "react";


function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  
  const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)).toFixed(2);


  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const ratioGCD = gcd(width, height);
  const aspectRatio = `${width / ratioGCD}:${height / ratioGCD}`;

 
  const copyToClipboard = () => {
    const screenInfo = `Width: ${width}px, Height: ${height}px, Diagonal: ${diagonal}px, Aspect Ratio: ${aspectRatio}`;
    navigator.clipboard.writeText(screenInfo);
    alert("Screen size copied to clipboard!");
  };

  return (
    <>
      <div className="container">
        <h1>Screen Size Calculator</h1>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        
        <button onClick={copyToClipboard}>Copy Screen Info</button>
      </div>
    </>
  );
}

export default MyComponent;
