"use client";

const CAPSULE_ART = "/assets/capsule-stasis.png";

export function LaboratoryCapsule() {
  return (
    <div className="capsule-wrap capsule-float relative w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CAPSULE_ART}
        alt="Laboratory stasis capsule with holographic DNA core"
        className="capsule-isolated-art h-auto w-full object-contain"
      />
    </div>
  );
}
