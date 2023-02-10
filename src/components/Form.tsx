import React, { useState } from "react";
import {onSubmit} from '../models//sunlight.model'

const Form = ({ onSubmit }: onSubmit) => {
  const [ip, setIp] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the parent component's onSubmit method and pass the IP address
    onSubmit(ip);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="">
        <div className="d-flex w-50 mx-auto flex-col my-3 justify-content-between">
          <label>Enter your IP address</label>
          <input
            name="ipAddress"
            type="text"
            placeholder="Enter IP address"
            value={ip}
            onChange={(event) => setIp(event.target.value)}
          />

          <button type="submit" className="btn btn-primary ml-auto">
            Show Sunlight Timing
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
