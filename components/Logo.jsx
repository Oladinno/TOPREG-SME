import Image from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <div {...rest}>
      {/*
      <svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <text
        x="0"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#2DF8BB"
        >
        Aje
      </text>
      <circle cx="110" cy="25" r="20" fill="#2DF8BB" />
      <text
        x="95"
        y="33"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#000"
      >
        360
      </text>
    </svg>

*/}

      <Image src="/Aje Logo 1.png" alt="Your Company Logo" width={100} height={70} />
    </div>
  );
}
