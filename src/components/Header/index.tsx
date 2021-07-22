import Image from "next/image";
import Link from "next/link";

import { SignInButton } from "../SignInButton";
import { ActiveLink } from "../ActiveLink";

import logoImage from "../../../public/images/logo.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImage} alt="ig.news" />

        <nav>
          <ActiveLink activeClassname={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassname={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
