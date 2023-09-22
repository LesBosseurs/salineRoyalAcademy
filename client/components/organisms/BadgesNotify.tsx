import Link from "next/link";
import Medal from "@/public/icons/others/medal";
import style from '../../styles/components/organisms/BadgesNotify.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state : "new" | "upgrade";
}

export default function BadgesNotify({ children, state}: ButtonProps) {
  return (
    <Link href={"#"} className={style.badge_notify}>
      <Medal/>
      <div className={style.description}>
        {state==="new"?(<span className={style.title}>Acquired new badge </span>):(<span className={style.title}>Upgrade badge </span>)}
        <span>{children}</span>
      </div>
    </Link>
  );
}
