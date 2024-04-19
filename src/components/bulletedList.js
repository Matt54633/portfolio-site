const BulletedList = ({ items }) => (
  <ul className=" list-disc ml-5 gap-1.5 flex flex-col mb-2">
    {items.map((item, index) => (
      <li key={index} className="text-[1rem] font-medium">
        {item}
      </li>
    ))}
  </ul>
);

export default BulletedList;
