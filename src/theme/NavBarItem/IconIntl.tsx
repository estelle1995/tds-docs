import React from 'react';
import clsx from 'clsx';

type Prop = {
  className: string;
}

const IconIntl = ({ className }: Prop) => {
  return <svg
    className={clsx('icon', className)}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="12963"
    width="200"
    height="200"
  >
    <path
      d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m42.666667 837.76c19.626667-13.610667 41.728-37.589333 63.445333-77.44 33.578667-61.525333 57.941333-148.181333 63.402667-248.32H554.666667v325.76z m-85.333334 0V554.666667H342.485333c5.461333 100.138667 29.866667 186.794667 63.402667 248.32 21.76 39.850667 43.818667 63.829333 63.445333 77.44zM554.666667 469.333333h126.848c-5.461333-100.138667-29.866667-186.794667-63.402667-248.32-21.76-39.850667-43.818667-63.829333-63.445333-77.44V469.333333z m-85.333334-325.76c-19.626667 13.610667-41.728 37.589333-63.445333 77.44C372.309333 282.538667 347.946667 369.194667 342.485333 469.333333H469.333333V143.573333z m218.197334 710.058667A384.256 384.256 0 0 0 893.653333 554.666667h-126.72c-5.76 117.504-35.157333 222.506667-79.36 298.965333zM766.933333 469.333333h126.72a384.256 384.256 0 0 0-206.08-298.965333C731.733333 246.826667 761.173333 351.829333 766.890667 469.333333zM336.469333 170.368A384.213333 384.213333 0 0 0 130.389333 469.333333h126.72c5.76-117.504 35.157333-222.506667 79.36-298.965333z m0 683.264C292.266667 777.173333 262.826667 672.170667 257.109333 554.666667h-126.72a384.256 384.256 0 0 0 206.08 298.965333z"
      p-id="12964"
    />
  </svg>;
};

export default IconIntl;
