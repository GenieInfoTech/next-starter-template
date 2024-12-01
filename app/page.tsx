import PlayGround from "./play/PlayGround";

export default function Home() {
  return (
    <div>
      <div className="text-4xl">Limadi Next</div>

      <div className="pt-5">
        <PlayGround />
      </div>
    </div>
  );
}
