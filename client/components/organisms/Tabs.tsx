import style from '@/styles/components/organisms/Tabs.module.scss';
import { useState } from 'react';

type TabsProps = {
  className?: string;
  tabs: {
    title: string;
    content: React.ReactElement;
  }[];
};

export default function Tabs({ className, tabs }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className={`${style.tabs} ${className}`}>
      <ul>
        {tabs.map((tab: any, key: number) => {
          return (
            <li key={key} onClick={() => setSelectedTab(key)}>
              {tab.title}
              {selectedTab == key ? (
                <span className={style.underline}></span>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
      {tabs[selectedTab].content}
    </div>
  );
}
