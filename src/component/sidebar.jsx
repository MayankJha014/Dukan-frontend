import React, { useContext } from "react";
import Logo from "../assets/Image.png";
import PocketIcon from "../assets/icons/pocket.png";
import { TbReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "./context/themeContext";
import Navbar from "./dashboard/navbar";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ children }) => {
  const navIndex = [
    {
      title: "Home",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9398 17.75H12.0675C11.7165 17.75 11.3797 17.6111 11.1307 17.3636C10.8816 17.1162 10.7407 16.7802 10.7385 16.4292V11.1622H7.22722V16.4292C7.22505 16.7802 7.08407 17.1162 6.83507 17.3636C6.58606 17.6111 6.24925 17.75 5.89818 17.75H2.02593C1.62123 17.75 1.2331 17.5892 0.946934 17.3031C0.660767 17.0169 0.5 16.6288 0.5 16.2241V6.99465C0.500317 6.75707 0.556109 6.52284 0.662931 6.31062C0.769752 6.0984 0.924652 5.91405 1.11529 5.77227L8.15426 0.554571C8.41825 0.35686 8.73919 0.25 9.069 0.25C9.39882 0.25 9.71975 0.35686 9.98374 0.554571L16.8832 5.76406C17.0665 5.91176 17.2136 6.09945 17.3131 6.31275C17.4126 6.52605 17.462 6.75931 17.4575 6.99465V16.2241C17.4586 16.4241 17.4201 16.6223 17.3443 16.8074C17.2686 16.9925 17.1569 17.1608 17.0159 17.3026C16.8749 17.4444 16.7072 17.5569 16.5225 17.6337C16.3378 17.7105 16.1398 17.75 15.9398 17.75ZM12.1496 16.3553H15.9562C15.9896 16.3532 16.0209 16.3385 16.0438 16.3141C16.0666 16.2897 16.0793 16.2575 16.0793 16.2241V6.99465C16.08 6.97543 16.0758 6.95635 16.0672 6.93915C16.0586 6.92195 16.0458 6.90718 16.03 6.89621L9.11412 1.68671C9.09109 1.67119 9.06396 1.6629 9.03619 1.6629C9.00842 1.6629 8.98128 1.67119 8.95825 1.68671L1.92748 6.90441C1.91051 6.91673 1.89653 6.93271 1.88659 6.95117C1.87664 6.96964 1.87099 6.99011 1.87006 7.01106V16.2241C1.87006 16.2589 1.88389 16.2923 1.9085 16.3169C1.93312 16.3415 1.96651 16.3553 2.00132 16.3553H5.80794V11.0228C5.81009 10.6905 5.94303 10.3725 6.17796 10.1376C6.41289 9.90267 6.73091 9.76973 7.06314 9.76758H10.878C11.0439 9.7665 11.2084 9.79811 11.3621 9.8606C11.5158 9.9231 11.6557 10.0153 11.7737 10.1318C11.8918 10.2484 11.9858 10.387 12.0503 10.5399C12.1148 10.6928 12.1485 10.8569 12.1496 11.0228V16.3553Z"
            fill="white"
          />
        </svg>
      ),

    },
    {
      title: "Orders",
      icon: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2972 1.98737C13.1119 1.19626 12.4057 0.625 11.5804 0.625H6.41988L6.28896 0.629913L6.15288 0.645423L6.01906 0.671421C5.22795 0.856753 4.65669 1.56287 4.65669 2.38819V2.60323H3.19453L3.0445 2.60717C1.70315 2.67794 0.614258 3.69145 0.614258 4.96848V17.0098L0.618696 17.1505C0.698208 18.4071 1.83563 19.375 3.19453 19.375H14.8058L14.9558 19.3711C16.2972 19.3003 17.3861 18.2868 17.3861 17.0098V4.96848L17.3816 4.82771C17.3021 3.57113 16.1647 2.60323 14.8058 2.60323H13.3436V2.38819L13.3387 2.25726L13.3232 2.12119L13.2972 1.98737ZM13.3436 3.89336V4.10837C13.3436 4.93369 12.7724 5.63981 11.9813 5.82514L11.8474 5.85114L11.7114 5.86665L11.5804 5.87156H6.41988C5.59457 5.87156 4.88845 5.3003 4.70311 4.5092L4.67712 4.37537L4.66161 4.2393L4.65669 4.10837V3.89336H3.19453C2.50904 3.89336 1.97107 4.33572 1.91015 4.86776L1.9044 4.96848V17.0098C1.9044 17.5516 2.40204 18.0259 3.06781 18.0798L3.19453 18.0849H14.8058C15.4913 18.0849 16.0292 17.6425 16.0902 17.1105L16.0959 17.0098V4.96848C16.0959 4.42661 15.5983 3.95238 14.9325 3.89846L14.8058 3.89336H13.3436ZM6.67764 1.61411H11.3227C11.7697 1.61411 12.1592 1.90084 12.3005 2.31864L12.3305 2.42573L12.3487 2.53612L12.3548 2.64625L12.3542 3.86708L12.3452 3.98931L12.324 4.10085L12.287 4.21899C12.1783 4.50363 11.9484 4.72443 11.6589 4.8251L11.5477 4.85711L11.4314 4.87652L11.3227 4.88246L6.66091 4.88191L6.53868 4.87291L6.42713 4.85165L6.309 4.81468C6.02436 4.70593 5.80356 4.47604 5.70288 4.18656L5.67087 4.07533L5.65146 3.95905L5.64553 3.85031L5.64607 2.62948L5.65508 2.50725L5.67633 2.39571L5.7133 2.27757C5.82206 1.99293 6.05194 1.77213 6.34142 1.67146L6.45265 1.63945L6.56893 1.62004L6.67764 1.61411Z"
            fill="white"
          />
          <path
            d="M4.46309 10.5959C4.93831 10.5959 5.32356 10.2107 5.32356 9.73547C5.32356 9.26025 4.93831 8.875 4.46309 8.875C3.98786 8.875 3.60262 9.26025 3.60262 9.73547C3.60262 10.2107 3.98786 10.5959 4.46309 10.5959Z"
            fill="white"
          />
          <path
            d="M7.04453 8.9485C6.6125 8.9485 6.26228 9.29872 6.26228 9.73075C6.26228 10.1628 6.6125 10.513 7.04453 10.513H13.6154C14.0474 10.513 14.3976 10.1628 14.3976 9.73075C14.3976 9.29872 14.0474 8.9485 13.6154 8.9485H7.04453Z"
            fill="white"
          />
          <path
            d="M6.26231 14.1522C6.26231 13.7202 6.61254 13.3699 7.04456 13.3699H13.6154C14.0474 13.3699 14.3977 13.7202 14.3977 14.1522C14.3977 14.5842 14.0474 14.9344 13.6154 14.9344H7.04456C6.61254 14.9344 6.26231 14.5842 6.26231 14.1522Z"
            fill="white"
          />
          <path
            d="M4.46312 15.0174C4.93834 15.0174 5.32359 14.6321 5.32359 14.1569C5.32359 13.6817 4.93834 13.2964 4.46312 13.2964C3.98789 13.2964 3.60265 13.6817 3.60265 14.1569C3.60265 14.6321 3.98789 15.0174 4.46312 15.0174Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Products",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0807 9.83317C16.7711 9.83317 17.3307 10.3928 17.3307 11.0832V16.0832C17.3307 16.7735 16.7711 17.3332 16.0807 17.3332H11.0807C10.3904 17.3332 9.83073 16.7735 9.83073 16.0832V11.0832C9.83073 10.3928 10.3904 9.83317 11.0807 9.83317H16.0807ZM6.9165 9.83317C7.60686 9.83317 8.1665 10.3928 8.1665 11.0832V16.0832C8.1665 16.7735 7.60686 17.3332 6.9165 17.3332H1.9165C1.22615 17.3332 0.666504 16.7735 0.666504 16.0832V11.0832C0.666504 10.3928 1.22615 9.83317 1.9165 9.83317H6.9165ZM15.914 11.2498H11.2473V15.9165H15.914V11.2498ZM6.74984 11.2498H2.08317V15.9165H6.74984V11.2498ZM6.9165 0.666504C7.60686 0.666504 8.1665 1.22615 8.1665 1.9165V6.9165C8.1665 7.60686 7.60686 8.1665 6.9165 8.1665H1.9165C1.22615 8.1665 0.666504 7.60686 0.666504 6.9165V1.9165C0.666504 1.22615 1.22615 0.666504 1.9165 0.666504H6.9165ZM16.0807 0.666504C16.7711 0.666504 17.3307 1.22615 17.3307 1.9165V6.9165C17.3307 7.60686 16.7711 8.1665 16.0807 8.1665H11.0807C10.3904 8.1665 9.83073 7.60686 9.83073 6.9165V1.9165C9.83073 1.22615 10.3904 0.666504 11.0807 0.666504H16.0807ZM6.74984 2.08317H2.08317V6.74984H6.74984V2.08317ZM15.914 2.08317H11.2473V6.74984H15.914V2.08317Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Delivery",
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.833496 1.03682C0.833496 0.652161 1.14397 0.340332 1.52695 0.340332H13.0813C13.4643 0.340332 13.7748 0.652161 13.7748 1.03682V11.0945C13.7748 11.4791 13.4643 11.791 13.0813 11.791H1.52695C1.14397 11.791 0.833496 11.4791 0.833496 11.0945V1.03682ZM2.2204 1.73331V10.398H12.3879V1.73331H2.2204Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3879 4.90518C12.3879 4.52052 12.6983 4.20869 13.0813 4.20869H16.1625C16.3464 4.20869 16.5228 4.28207 16.6528 4.41269L18.9637 6.73369C19.0938 6.8643 19.1668 7.04146 19.1668 7.22618V11.0945C19.1668 11.4792 18.8564 11.791 18.4734 11.791L13.0813 11.791C12.6984 11.791 12.3879 11.4792 12.3879 11.0945V4.90518ZM13.7748 5.60167V10.398H17.7799V7.51467L15.8753 5.60167H13.7748Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.99322 11.791C4.31265 11.791 3.76094 12.3451 3.76094 13.0286C3.76094 13.7122 4.31265 14.2663 4.99322 14.2663C5.67379 14.2663 6.2255 13.7122 6.2255 13.0286C6.2255 12.3451 5.67379 11.791 4.99322 11.791ZM2.37404 13.0286C2.37404 11.5758 3.54668 10.398 4.99322 10.398C6.43975 10.398 7.6124 11.5758 7.6124 13.0286C7.6124 14.4815 6.43975 15.6593 4.99322 15.6593C3.54668 15.6593 2.37404 14.4815 2.37404 13.0286Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0071 11.791C14.3265 11.791 13.7748 12.3451 13.7748 13.0286C13.7748 13.7122 14.3265 14.2663 15.0071 14.2663C15.6876 14.2663 16.2393 13.7122 16.2393 13.0286C16.2393 12.3451 15.6876 11.791 15.0071 11.791ZM12.3879 13.0286C12.3879 11.5758 13.5605 10.398 15.0071 10.398C16.4536 10.398 17.6262 11.5758 17.6262 13.0286C17.6262 14.4815 16.4536 15.6593 15.0071 15.6593C13.5605 15.6593 12.3879 14.4815 12.3879 13.0286Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Marketing",
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1074 0.290837C13.0654 -0.231661 14.2333 0.461666 14.2333 1.55281V14.4471C14.2333 15.5383 13.0653 16.2316 12.1074 15.7091L4.04696 11.3125H2.375C1.23591 11.3125 0.3125 10.3891 0.3125 9.24999V6.74999C0.3125 5.6109 1.23591 4.68749 2.375 4.68749H4.04692L12.1074 0.290837ZM12.6083 1.86866L5.06662 5.9823V10.0176L12.6083 14.1313V1.86866ZM1.9375 6.74999C1.9375 6.50836 2.13338 6.31249 2.375 6.31249H3.4375V9.68749H2.375C2.13338 9.68749 1.9375 9.49161 1.9375 9.24999V6.74999Z"
            fill="white"
          />
          <path
            d="M18.6387 3.32573C18.919 3.67613 18.8622 4.18743 18.5118 4.46775L16.4284 6.13442C16.078 6.41474 15.5667 6.35793 15.2864 6.00753C15.0061 5.65713 15.0629 5.14583 15.4133 4.86551L17.4966 3.19884C17.847 2.91852 18.3583 2.97533 18.6387 3.32573Z"
            fill="white"
          />
          <path
            d="M15.5041 8.02081C15.5041 7.57208 15.8679 7.20831 16.3166 7.20831H18.8583C19.307 7.20831 19.6708 7.57208 19.6708 8.02081C19.6708 8.46955 19.307 8.83331 18.8583 8.83331H16.3166C15.8679 8.83331 15.5041 8.46955 15.5041 8.02081Z"
            fill="white"
          />
          <path
            d="M16.4284 10.2822C16.078 10.0019 15.5667 10.0587 15.2864 10.4091C15.0061 10.7595 15.0629 11.2708 15.4133 11.5511L17.4966 13.2178C17.847 13.4981 18.3583 13.4413 18.6387 13.0909C18.919 12.7405 18.8622 12.2292 18.5118 11.9489L16.4284 10.2822Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Analytics",
      icon: (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.6626 8.9376C1.6626 8.50958 2.00958 8.1626 2.4376 8.1626H6.8126C7.24062 8.1626 7.5876 8.50958 7.5876 8.9376C7.5876 9.36562 7.24062 9.7126 6.8126 9.7126H3.2126V14.5626C3.2126 14.9906 2.86562 15.3376 2.4376 15.3376C2.00958 15.3376 1.6626 14.9906 1.6626 14.5626V8.9376Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.412598 14.5626C0.412598 14.1346 0.759577 13.7876 1.1876 13.7876H16.8126C17.2406 13.7876 17.5876 14.1346 17.5876 14.5626C17.5876 14.9906 17.2406 15.3376 16.8126 15.3376H1.1876C0.759577 15.3376 0.412598 14.9906 0.412598 14.5626Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.0376 5.1876C6.0376 4.75958 6.38458 4.4126 6.8126 4.4126H11.1876C11.6156 4.4126 11.9626 4.75958 11.9626 5.1876C11.9626 5.61562 11.6156 5.9626 11.1876 5.9626H7.5876V14.5626C7.5876 14.9906 7.24062 15.3376 6.8126 15.3376C6.38458 15.3376 6.0376 14.9906 6.0376 14.5626V5.1876Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4126 1.4376C10.4126 1.00958 10.7596 0.662598 11.1876 0.662598H15.5626C15.9906 0.662598 16.3376 1.00958 16.3376 1.4376V14.5626C16.3376 14.9906 15.9906 15.3376 15.5626 15.3376H11.1876C10.7596 15.3376 10.4126 14.9906 10.4126 14.5626V1.4376ZM11.9626 2.2126V13.7876H14.7876V2.2126H11.9626Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Payments",
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.75 11.75H1.47727C0.661397 11.75 0 11.1904 0 10.5V1.75C0 1.05964 0.661397 0.5 1.47727 0.5H14.7727C15.5886 0.5 16.25 1.05964 16.25 1.75L16.25 4.25H18.5227C19.3386 4.25 20 4.8796 20 5.65625V14.0938C20 14.8704 19.3386 15.5 18.5227 15.5H5.22727C4.4114 15.5 3.75 14.8704 3.75 14.0938V11.75ZM5 4C4.17157 4 3.5 4.67157 3.5 5.5V10.25H1.5V2H14.75L14.75 4H5ZM11.875 12.375C13.2557 12.375 14.375 11.2557 14.375 9.875C14.375 8.49429 13.2557 7.375 11.875 7.375C10.4943 7.375 9.375 8.49429 9.375 9.875C9.375 11.2557 10.4943 12.375 11.875 12.375Z"
            fill="white"
          />
        </svg>
      ),
      link: "/",
    },
    {
      title: "Tools",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.43891 2.49165L14.924 7.22495L10.5643 9.16558C9.92543 9.44161 9.4159 9.94924 9.1388 10.5856L7.20249 14.9284L2.4508 2.49165H2.43891ZM1.14411 0.125C0.978396 0.125419 0.815239 0.165973 0.668771 0.243195C0.522304 0.320418 0.396882 0.431974 0.303346 0.568241C0.20981 0.704509 0.150895 0.861409 0.131799 1.02539C0.112704 1.18936 0.133982 1.35549 0.193719 1.50947L6.13333 17.2122C6.2063 17.4075 6.33769 17.5758 6.50977 17.6943C6.68186 17.8128 6.88641 17.8758 7.09561 17.8749C7.29598 17.878 7.49261 17.821 7.65999 17.7113C7.82738 17.6015 7.95766 17.4441 8.03397 17.2595L10.7187 11.2601C10.8175 11.0249 11.0053 10.8378 11.2414 10.7394L17.276 8.0651C17.4599 7.98022 17.6147 7.84338 17.7211 7.67159C17.8275 7.4998 17.8808 7.30064 17.8745 7.09888C17.8682 6.89713 17.8024 6.70171 17.6854 6.53687C17.5684 6.37203 17.4054 6.24505 17.2166 6.17177L1.46473 0.255148C1.34333 0.208911 1.21463 0.184863 1.08466 0.184152L1.14411 0.125Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Discount",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7625 6.16247C12.9091 6.2765 13.0073 6.44166 13.0375 6.62496C13.0642 6.80556 13.0194 6.98947 12.9125 7.13746L8.22498 13.3875C8.16002 13.4774 8.07423 13.5503 7.97496 13.5999C7.87393 13.6499 7.76268 13.6756 7.64999 13.675C7.49764 13.6734 7.34941 13.6254 7.22499 13.5375C7.14976 13.479 7.08614 13.4069 7.03746 13.3249C6.98424 13.2464 6.95003 13.1565 6.93748 13.0625C6.92497 12.9712 6.92497 12.8787 6.93748 12.7875C6.96642 12.6983 7.00856 12.6141 7.06249 12.5375L11.75 6.28747C11.807 6.21251 11.8784 6.14959 11.9599 6.10238C12.0415 6.05518 12.1316 6.02463 12.225 6.01247H12.3375C12.4922 6.0123 12.6422 6.06525 12.7625 6.16247Z"
            fill="white"
          />
          <path
            d="M11.7977 10.9404C11.965 10.8718 12.1442 10.8368 12.325 10.8375C12.5059 10.8368 12.6851 10.8718 12.8524 10.9404C13.0197 11.009 13.1718 11.11 13.3 11.2375C13.4915 11.4301 13.6217 11.6751 13.6742 11.9416C13.7266 12.2082 13.6989 12.4842 13.5946 12.735C13.4903 12.9858 13.3141 13.2001 13.0881 13.3509C12.8622 13.5016 12.5966 13.5821 12.325 13.5821C12.0534 13.5821 11.7879 13.5016 11.5619 13.3509C11.336 13.2001 11.1597 12.9858 11.0554 12.735C10.9511 12.4842 10.9234 12.2082 10.9759 11.9416C11.0283 11.6751 11.1585 11.4301 11.35 11.2375C11.4782 11.11 11.6304 11.009 11.7977 10.9404Z"
            fill="white"
          />
          <path
            d="M8.61256 8.50001C8.86905 8.24032 9.01287 7.89002 9.01287 7.52501C9.01287 7.16001 8.86905 6.80971 8.61256 6.55001C8.35286 6.29352 8.00256 6.1497 7.63756 6.1497C7.27255 6.1497 6.92225 6.29352 6.66256 6.55001C6.40397 6.8086 6.2587 7.15932 6.2587 7.52501C6.2587 7.89071 6.40397 8.24142 6.66256 8.50001C6.92115 8.7586 7.27186 8.90387 7.63756 8.90387C8.00325 8.90387 8.35397 8.7586 8.61256 8.50001Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.4 10.2625L19.0875 11.7875C19.2286 12.0927 19.2971 12.4264 19.2875 12.7625C19.29 13.0899 19.2217 13.4139 19.0875 13.7125C18.9612 14.0033 18.7736 14.2634 18.5375 14.475C18.3002 14.6878 18.0244 14.8533 17.725 14.9625L16.1875 15.55C16.0605 15.5947 15.9452 15.6673 15.85 15.7625C15.7548 15.8577 15.6822 15.973 15.6375 16.1L15.05 17.6375C14.9382 17.9414 14.7636 18.2182 14.5375 18.45C14.312 18.687 14.0395 18.8743 13.7375 19C13.4404 19.1319 13.1188 19.2001 12.7937 19.2001C12.4686 19.2001 12.1471 19.1319 11.85 19L10.35 18.3375C10.2306 18.2738 10.0978 18.2395 9.9625 18.2375C9.82819 18.2352 9.69524 18.2651 9.57497 18.325L8.07499 19.0125C7.70015 19.1845 7.28645 19.2543 6.87592 19.2148C6.46538 19.1753 6.07263 19.0279 5.73749 18.7875C5.34063 18.5131 5.03568 18.1253 4.86248 17.675L4.28749 16.1375C4.24278 16.0105 4.17016 15.8952 4.07497 15.8C3.97979 15.7048 3.86446 15.6322 3.73749 15.5875L2.1875 15C1.88784 14.8971 1.61297 14.7328 1.3805 14.5176C1.14803 14.3023 0.963058 14.0409 0.837479 13.75C0.703235 13.4514 0.635011 13.1274 0.637474 12.8C0.635232 12.4767 0.703487 12.1567 0.837479 11.8625L1.525 10.3625C1.62511 10.1138 1.62511 9.83611 1.525 9.58748L0.837479 8.0875C0.70508 7.78782 0.6329 7.46502 0.625 7.13749C0.624989 6.81163 0.688676 6.4889 0.812492 6.18748C0.932122 5.8853 1.11544 5.61246 1.34998 5.3875C1.58372 5.16392 1.86002 4.98963 2.16248 4.87499L3.7125 4.3C3.83919 4.24885 3.95404 4.17224 4.04999 4.07497C4.14189 3.98198 4.21414 3.87149 4.26247 3.75L4.83749 2.19997C4.94604 1.89156 5.1259 1.61317 5.36247 1.38748C5.58795 1.15046 5.86045 0.963131 6.16249 0.837479C6.46077 0.709908 6.78183 0.64415 7.10625 0.64415C7.43066 0.64415 7.75168 0.709908 8.04996 0.837479L9.54998 1.525C9.79861 1.62511 10.0763 1.62511 10.325 1.525L11.825 0.837479C12.1208 0.706666 12.4392 0.634521 12.7625 0.625C13.0883 0.624989 13.4111 0.688676 13.7125 0.812492C14.0102 0.938645 14.2797 1.12306 14.5051 1.3549C14.7305 1.58675 14.9073 1.86131 15.025 2.16248L15.6125 3.7125C15.6608 3.83399 15.7331 3.94449 15.825 4.03748C15.9209 4.13474 16.0358 4.21131 16.1625 4.26247L17.7 4.83749C18.0003 4.93878 18.2769 5.10043 18.5125 5.3125C18.7489 5.52873 18.9364 5.79295 19.0625 6.08749C19.2028 6.38455 19.2755 6.70896 19.2755 7.03747C19.2755 7.36598 19.2028 7.69042 19.0625 7.98748L18.4 9.4875C18.3387 9.60725 18.3086 9.74052 18.3125 9.87499C18.3116 10.0092 18.3415 10.1417 18.4 10.2625ZM17.7125 12.3125L17.1 10.8625C16.9775 10.5614 16.922 10.2372 16.9375 9.91249C16.9467 9.57434 17.0276 9.242 17.175 8.93749L17.8625 7.43748C17.9503 7.1952 17.9503 6.92975 17.8625 6.68747C17.7584 6.44925 17.5656 6.26097 17.325 6.16249L15.775 5.5875C15.4545 5.47516 15.1638 5.29132 14.925 5.04997C14.6862 4.80899 14.5028 4.51896 14.3875 4.19998L13.8 2.64999C13.761 2.5269 13.6923 2.41528 13.6 2.32498C13.5115 2.2334 13.4051 2.16108 13.2875 2.1125C13.1719 2.05882 13.0461 2.03098 12.9187 2.03098C12.7914 2.03098 12.6655 2.05882 12.55 2.1125L11.05 2.79999C10.7396 2.9401 10.403 3.01254 10.0625 3.01254C9.72196 3.01254 9.38533 2.9401 9.07497 2.79999L7.575 2.1125C7.452 2.06233 7.32034 2.03681 7.1875 2.03747C7.06795 2.01253 6.94454 2.01253 6.82499 2.03747C6.58677 2.14158 6.39845 2.3344 6.29997 2.575L5.72498 4.12498C5.60313 4.42297 5.42484 4.69463 5.19997 4.925C4.96109 5.16635 4.67042 5.35015 4.34998 5.46249L2.79999 6.03748C2.66694 6.07912 2.54365 6.14714 2.43748 6.23749C2.34016 6.33605 2.25989 6.45009 2.19997 6.57497C2.11212 6.81726 2.11212 7.0827 2.19997 7.32498L2.8875 8.825C3.02761 9.13536 3.10005 9.47195 3.10005 9.81247C3.10005 10.153 3.02761 10.4896 2.8875 10.8L2.19997 12.3C2.15285 12.4158 2.12334 12.5379 2.11246 12.6625C2.11213 12.7912 2.13767 12.9188 2.1875 13.0375C2.23909 13.1535 2.31104 13.2594 2.39998 13.35C2.49568 13.4353 2.60572 13.503 2.72499 13.55L4.27498 14.1375C4.5947 14.2514 4.88506 14.4349 5.12505 14.6749C5.36503 14.9149 5.54864 15.2053 5.6625 15.525L6.23749 17.075C6.3402 17.3128 6.52716 17.5042 6.76247 17.6125C6.87922 17.6524 7.00159 17.6735 7.12498 17.675C7.25781 17.6756 7.38948 17.6502 7.51247 17.6L9.01249 16.9125C9.32285 16.7724 9.65948 16.6999 10 16.6999C10.3405 16.6999 10.6771 16.7724 10.9875 16.9125L12.4875 17.6C12.7298 17.6878 12.9952 17.6878 13.2375 17.6C13.4734 17.4903 13.6572 17.293 13.75 17.05L14.3375 15.5125C14.4498 15.192 14.6336 14.9014 14.875 14.6625C15.1106 14.4171 15.4023 14.2327 15.725 14.125L17.1875 13.5625C17.3068 13.5155 17.4168 13.4478 17.5125 13.3625C17.6014 13.2719 17.6734 13.166 17.725 13.05C17.7748 12.9313 17.8003 12.8037 17.8 12.675C17.7891 12.5505 17.7596 12.4282 17.7125 12.3125Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Audience",
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6125 13.25V14.7875C14.6142 14.8854 14.5963 14.9826 14.56 15.0736C14.5236 15.1645 14.4696 15.2473 14.4009 15.3171C14.3323 15.3869 14.2505 15.4423 14.1601 15.4802C14.0698 15.518 13.9729 15.5375 13.875 15.5375C13.6761 15.5375 13.4853 15.4585 13.3446 15.3178C13.204 15.1772 13.125 14.9864 13.125 14.7875V13.25C13.125 12.6267 12.8774 12.029 12.4367 11.5883C11.996 11.1476 11.3982 10.9 10.775 10.9H4.58747C3.96638 10.9033 3.37189 11.1523 2.93388 11.5927C2.49587 12.033 2.24997 12.6289 2.24998 13.25V14.7875C2.24998 14.9864 2.17098 15.1772 2.03033 15.3178C1.88967 15.4585 1.69888 15.5375 1.49997 15.5375C1.30106 15.5375 1.1103 15.4585 0.96965 15.3178C0.828998 15.1772 0.75 14.9864 0.75 14.7875V13.25C0.75 12.2322 1.15429 11.2561 1.87396 10.5365C2.59363 9.8168 3.5697 9.41247 4.58747 9.41247H10.775C11.2794 9.41082 11.7791 9.50898 12.2455 9.70125C12.7118 9.89351 13.1355 10.1761 13.4922 10.5328C13.8489 10.8894 14.1315 11.3132 14.3237 11.7795C14.516 12.2458 14.6141 12.7456 14.6125 13.25Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.64998 0.125C6.891 0.125 6.14906 0.350074 5.51799 0.771744C4.88691 1.19341 4.39505 1.79275 4.1046 2.49396C3.81415 3.19518 3.73814 3.96674 3.88621 4.71114C4.03428 5.45554 4.39979 6.13933 4.93647 6.67602C5.47316 7.2127 6.15691 7.57821 6.90131 7.72628C7.64571 7.87435 8.41732 7.79834 9.11853 7.50789C9.81974 7.21744 10.4191 6.72558 10.8407 6.0945C11.2624 5.46343 11.4875 4.72149 11.4875 3.96251C11.4842 2.94575 11.0788 1.97158 10.3599 1.25262C9.64091 0.533667 8.66674 0.128296 7.64998 0.125ZM7.64998 6.31251C7.1852 6.31251 6.73086 6.17469 6.3444 5.91647C5.95795 5.65825 5.65671 5.29123 5.47885 4.86182C5.30098 4.43242 5.25447 3.95991 5.34514 3.50406C5.43582 3.0482 5.65965 2.62944 5.9883 2.30079C6.31695 1.97214 6.73568 1.74834 7.19153 1.65767C7.64739 1.56699 8.11989 1.61351 8.5493 1.79137C8.9787 1.96924 9.34573 2.27047 9.60395 2.65693C9.86217 3.04338 9.99999 3.49772 9.99999 3.96251C9.99999 4.58577 9.75238 5.18348 9.31166 5.62419C8.87095 6.0649 8.27324 6.31251 7.64998 6.31251Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.25 13.25V14.7875C19.2516 14.8854 19.2338 14.9826 19.1975 15.0736C19.1612 15.1645 19.1071 15.2473 19.0385 15.3171C18.9698 15.3869 18.8879 15.4423 18.7976 15.4802C18.7073 15.518 18.6104 15.5375 18.5125 15.5375C18.3136 15.5375 18.1228 15.4585 17.9822 15.3178C17.8415 15.1772 17.7625 14.9864 17.7625 14.7875V13.25C17.7646 12.7285 17.5922 12.2213 17.2728 11.8091C16.9535 11.3969 16.5054 11.1032 16 10.975C15.8079 10.925 15.6434 10.8009 15.5427 10.6298C15.4419 10.4588 15.4131 10.2548 15.4625 10.0625C15.488 9.96802 15.5322 9.87955 15.5923 9.8023C15.6523 9.72504 15.7272 9.66051 15.8125 9.61248C15.9244 9.54173 16.0552 9.50686 16.1875 9.51249C16.2494 9.50036 16.3131 9.50036 16.375 9.51249C17.2029 9.72473 17.9358 10.2081 18.4569 10.8855C18.978 11.5629 19.2572 12.3954 19.25 13.25Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.1625 3.975C16.1696 4.83288 15.8891 5.66838 15.3657 6.34813C14.8423 7.02787 14.1062 7.51265 13.275 7.725C13.1809 7.75027 13.0828 7.75664 12.9862 7.74377C12.8897 7.7309 12.7966 7.69899 12.7125 7.64997C12.5442 7.5455 12.4231 7.37963 12.375 7.18747C12.3497 7.09341 12.3433 6.99529 12.3562 6.89874C12.3691 6.80219 12.4009 6.70916 12.45 6.625C12.5554 6.45759 12.7209 6.33681 12.9125 6.28747C13.4166 6.15697 13.8631 5.86272 14.1818 5.45095C14.5005 5.03918 14.6735 4.53323 14.6735 4.0125C14.6735 3.49178 14.5005 2.98579 14.1818 2.57402C13.8631 2.16225 13.4166 1.868 12.9125 1.73749C12.7199 1.68279 12.5549 1.55791 12.45 1.38749C12.4003 1.3036 12.368 1.21052 12.3551 1.11387C12.3422 1.01722 12.349 0.918964 12.375 0.824979C12.3983 0.730336 12.4402 0.641265 12.4982 0.56291C12.5562 0.484555 12.6291 0.418496 12.7128 0.368513C12.7965 0.318529 12.8893 0.285601 12.9858 0.271696C13.0823 0.257791 13.1806 0.263171 13.275 0.287489C14.0958 0.497192 14.8242 0.972616 15.3465 1.63965C15.8688 2.30668 16.1557 3.12783 16.1625 3.975Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Appearance",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.87506 10.5889C5.63445 10.5889 6.25006 9.97329 6.25006 9.2139C6.25006 8.45451 5.63445 7.8389 4.87506 7.8389C4.11567 7.8389 3.50006 8.45451 3.50006 9.2139C3.50006 9.97329 4.11567 10.5889 4.87506 10.5889Z"
            fill="white"
          />
          <path
            d="M9 5.4639C9 6.22329 8.38439 6.8389 7.625 6.8389C6.86561 6.8389 6.25 6.22329 6.25 5.4639C6.25 4.70451 6.86561 4.0889 7.625 4.0889C8.38439 4.0889 9 4.70451 9 5.4639Z"
            fill="white"
          />
          <path
            d="M12.3751 6.8389C13.1345 6.8389 13.7501 6.22329 13.7501 5.4639C13.7501 4.70451 13.1345 4.0889 12.3751 4.0889C11.6157 4.0889 11.0001 4.70451 11.0001 5.4639C11.0001 6.22329 11.6157 6.8389 12.3751 6.8389Z"
            fill="white"
          />
          <path
            d="M16.5 9.2139C16.5 9.97329 15.8844 10.5889 15.125 10.5889C14.3656 10.5889 13.75 9.97329 13.75 9.2139C13.75 8.45451 14.3656 7.8389 15.125 7.8389C15.8844 7.8389 16.5 8.45451 16.5 9.2139Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 19.375C4.875 19.375 0.625 15.125 0.625 10C0.625 4.875 4.875 0.625 10 0.625C15.125 0.625 19.375 4.375 19.375 9C19.375 12 16.875 14.5 13.875 14.5H12.125C11.75 14.5 11.375 14.875 11.375 15.25C11.375 15.5 11.5 15.625 11.625 15.75C12 16.125 12.125 16.625 12.125 17.125C12.125 18.375 11.125 19.375 10 19.375ZM10 2C5.625 2 2 5.625 2 10C2 14.375 5.625 18 10 18C10.375 18 10.75 17.625 10.75 17.25C10.75 17 10.625 16.875 10.5 16.75C10.125 16.375 10 15.875 10 15.375C10 14.25 11 13.25 12.125 13.25H13.875C16.125 13.25 18 11.375 18 9.125C18 5.125 14.375 2 10 2Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Plugin",
      icon: (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="white "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8081 7.41667C17.6831 7.16667 17.4248 7 17.1414 7H10.0914L10.8664 0.816667C10.9081 0.5 10.7331 0.183333 10.4331 0.0583333C10.3414 0.0166667 10.2414 0 10.1498 0C9.93309 0 9.72476 0.0916667 9.58309 0.258333L0.833095 10.7583C0.649761 10.975 0.616428 11.2833 0.733095 11.5333C0.849761 11.7917 1.11643 11.9583 1.39143 11.9583H8.44143L7.66643 18.1333C7.63309 18.4583 7.80809 18.7667 8.09976 18.9C8.39976 19.025 8.74976 18.9417 8.95809 18.6917L17.7081 8.19167C17.8831 7.975 17.9248 7.675 17.8081 7.41667ZM9.42476 15.85L9.99143 11.3167C10.0164 11.1083 9.94976 10.9 9.81643 10.7417C9.67476 10.5917 9.47476 10.5 9.26643 10.5H2.94976L9.10809 3.10833L8.54143 7.63333C8.51643 7.84167 8.58309 8.05 8.72476 8.20833C8.85809 8.36667 9.05809 8.45833 9.26643 8.45833H15.5831L9.42476 15.85Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const sidebarWidth = useContext(SidebarContext);

  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-[#eef1fe] flex">
        <div
          className="absolute right-5 top-5 sm:hidden bg-black text-white shadow-lg w-6 h-6 rounded-full text-center cursor-pointer"
          onClick={() => sidebarWidth.updateSidebar()}
        >
          X
        </div>
        <div
          className={`bg-[#1E2640] h-full transition-all duration-300 overflow-y-auto ${
            sidebarWidth.sidebar ? "w-16" : "w-60"
          } `}
        >
          <div className="flex flex-col min-h-full ">
            <div className="basis-24 flex justify-evenly items-center">
              <img
                src={Logo}
                alt="logo"
                style={{
                  imageRendering: "auto",
                }}
                className={`${
                  sidebarWidth.sidebar
                    ? "w-20 h-fit px-2 ml-2"
                    : "w-20 p-4 h-fit"
                }  object-cover bg-inherit rounded-md `}
              />
              <div className="px-1.5">
                <p
                  className={`${
                    sidebarWidth.sidebar ? "hidden" : "w-20"
                  } text-white font-inter py-1 `}
                >
                  Nishyan
                </p>
                <p
                  className={`${
                    sidebarWidth.sidebar ? "hidden" : "w-24 h-fit"
                  } text-white/60 font-inter text-sm underline cursor-pointer`}
                >
                  Visit Store
                </p>
              </div>
              <IoIosArrowDown
                className={
                  sidebarWidth.sidebar
                    ? "hidden"
                    : "w-20 text-white cursor-pointer"
                }
                size={25}
                onClick={() => sidebarWidth.updateSidebar()}
              />
            </div>
            <div
              className={`text-stone-500 text-xs font-medium w-4/5 mx-auto flex ${
                sidebarWidth.sidebar ? "items-center" : ""
              } flex-col`}
            >
              <p
                className={`${sidebarWidth.sidebar ? "hidden" : "block mt-4"}`}
              >
                Navigation
              </p>{" "}
              <div className="mb-5 mt-2">
                {navIndex.map((x, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={x.link ?? `${index}`}
                      className="contents"
                      activeClassName="active"
                    >
                      <li className="contents text-[0.7375rem]">
                        <div className="flex items-center px-4 hover:bg-white/10 rounded-lg my-2 py-3 text-stone-500">
                          <div className="">{x.icon}</div>
                          <h1
                            className={`px-6 whitespace-nowrap text-sm font-inter text-white ${
                              sidebarWidth.sidebar ? "hidden" : "block"
                            }`}
                          >
                            {x.title}
                          </h1>
                        </div>
                      </li>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-2 mt-auto bg-[#353C53] mx-6 my-2 rounded-md p-1">
              <div className="p-1 bg-white/10 rounded-md">
                <img
                  src={PocketIcon}
                  alt=""
                  className="w-8 h-8 invert-0 object-contain"
                />
              </div>
              <div className=" text-white font-inter ">
                <p className="text-sm font-light tracking-tighter">
                  Available credits
                </p>
                <p className="text-lg font-medium">222.10</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full relative ${
            sidebarWidth.sidebar ? "block" : "hidden sm:flex"
          }  flex-1 h-full flex flex-col flex-grow bg-white scroll-smooth overflow-x-hidden`}
        >
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
