import React from "react";
import InstagramSvg from "/public/images/icons/insta.svg";
import TiktokSvg from "/public/images/icons/tiktok.svg";
import Link from "next/link";

const bottomFooter = () => {

    return (
        <div className="bottom-footer">
        <nav className="footer-nav">
          <ul>
            <li>
              <Link href={"/about"}>За нас</Link>
            </li>
            <li>
              <Link href={"/contact"}>Контакт</Link>
            </li>
            <li>
              <a
                href={
                  "https://www.google.com/maps/place/Igrali%C5%A1te/@41.9993656,21.420193,17z/data=!3m1!4b1!4m6!3m5!1s0x135415d370780d7f:0x144a59c79c946d63!8m2!3d41.9993656!4d21.4227679!16s%2Fg%2F11nn1fgmtl?entry=ttu"
                }
              >
                Локатор на продавницата
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={"/faq"}>Често поставувани прашања (FAQ)</Link>
            </li>
            <li>
              <Link href={"/account/login"}>Регистрирај се / логирај се</Link>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <h5>Следи не на:</h5>
          <ul>
            <li>
              <a href={"https://www.instagram.com/igraliste.sk"}>
                <InstagramSvg className="social-icon" />
                igralishte.sk
              </a>
            </li>
            <li>
              <a href={"https://www.tiktok.com/@igraliste.sk"}>
                <TiktokSvg className="social-icon" />
                igralishte.sk
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default bottomFooter;    