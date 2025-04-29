"use client";

import React, { useState, useEffect } from "react";
import { Dock } from "@/components/dock/dock";
import Preloader from "@/components/pre-loader";

const BuyMeACoffee: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);
  

    return (
      <div className="text-white">
        {isLoading ? (
          <Preloader />
        ) : (
    <div>
    <Dock />
    </div>
        )}
      </div>
  );
};

export default BuyMeACoffee;