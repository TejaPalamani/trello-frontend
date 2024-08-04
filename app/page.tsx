import Image from 'next/image';
import { Sider } from './components/Sider';
import { RightSide } from './components/RightSide';

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sider />
      <RightSide />
    </div>
  );
}
