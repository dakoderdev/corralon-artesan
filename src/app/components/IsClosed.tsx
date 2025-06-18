"use client";
import React, { useState } from "react";

export default function IsClosed() {
  const now = new Date();
  const month = now.getMonth();
  const forceShow = false;
  const show = month === 11 || month === 0 || forceShow;
  const from = "01/01/2025";
  const to = "19/01/2025";
  return (
    <div className={`${show ? "" : "hidden"} bg-red-100 text-red-800 p-2 px-8 w-full`} id="isClosed">
      <p className="text-base w-full text-center">
        "Cerrado por vacaciones desde el {from} hasta el {to}"
      </p>
    </div>
  );
}