import Header from '@/components/common/Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface MasterclassProps {
  title: string;
}

export default function Course() {
  const router = useRouter();
  const { courseId } = router.query;

  const [masterclass, setMasterclass] = useState<MasterclassProps>({
    title: 'Loading...',
  });

  useEffect(() => {
    if (!courseId) {
      return;
    }
    axios({
      method: 'GET',
      url: '/api/getMasterclassById',
      params: {
        id: courseId,
      },
    }).then((res) => setMasterclass(res.data.data));
  }, [courseId]);

  return (
    <div>
      <Header name="Course" hrefBack="/courses" />
      <div>
        <h2>{masterclass.title}</h2>
      </div>
    </div>
  );
}
