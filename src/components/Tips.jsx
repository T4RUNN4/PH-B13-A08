export default function Tips({ qus, ans }) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold">
        {qus}
      </div>
      <div className="collapse-content text-sm">
        {ans}
      </div>
    </div>
  );
};
