import UnicornScene from "unicornstudio-react";

export default function HeroSection() {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="h-screen w-screen origin-top transform-gpu scale-y-[1.08]">
        <UnicornScene
          projectId="NJjisOXjNeuop52P4omO"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
          className="w-screen h-screen overflow-hidden [clip-path:inset(0_0_7%_0)]"
        />
      </div>
    </section>
  );
}
