import React from "react";

export default function Landing() {
    const LoadingPage = () => {
        const [showAnimation, setShowAnimation] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setShowAnimation(true);
          }, 2000); 
      
          return () => {
            clearTimeout(timer);
          };
        }, []);
      
        return (
          <div className="loading-page">
            <h1 className={`welcome-text ${showAnimation ? "animate" : ""}`}>
              Welcome back
            </h1>
          </div>
        );
      };
}


//sign up (admin) = username, admin access token, password