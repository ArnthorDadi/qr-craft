import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { HexColorPicker } from "react-colorful";
import { useQRCode } from "next-qrcode";

import type { NextPage } from "next";
import html2canvas from "html2canvas";
import { cn } from "@src/lib/utils";

const Home: NextPage = () => {
  const [text, setText] = useState("https://qr-craft-gray.vercel.app/");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");

  const downloadImage = () => {
    const element = document.getElementById("capture");

    if (!element) {
      return;
    }

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL(); // Converts canvas to image data URL
      link.download = "generated-qr-code.png"; // Specify the image name
      link.click(); // Triggers the download
    });
  };

  return (
    <>
      <Head>
        <title>QR Code Generator</title>
        <meta
          name="description"
          content="A simple QR code generator using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={cn(
          `flex min-h-screen items-center justify-center text-white bg-gradient-to-r from-[${bgColor}] to-[${fgColor}]`
        )}
        style={{
          background: `radial-gradient(circle, ${fgColor} 30%, ${bgColor} 100%)`,
        }}
      >
        <div
          className={
            "container flex flex-col items-center justify-center gap-6 px-4 py-8"
          }
        >
          <button
            onClick={downloadImage}
            className="sticky top-10 z-10 h-fit rounded-lg  bg-blue-500 px-5 py-5 text-sm text-white hover:bg-blue-600"
          >
            Download QR Code
          </button>
          <div className={"w-full max-w-[440px]"}>
            <QRMessageInput text={text} setText={setText} />
          </div>

          <QRCode
            id={"capture"}
            containerClassName={""}
            text={text}
            bgColor={bgColor}
            pixelColor={fgColor}
          />

          <QRColorPickers
            bgColor={bgColor}
            fgColor={fgColor}
            setBgColor={setBgColor}
            setFgColor={setFgColor}
          />
        </div>
      </main>
    </>
  );
};

const QRMessageInput = ({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium">
        Enter Text or URL
      </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-lg border border-gray-600 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type something..."
      />
    </div>
  );
};

const QRColorPickers = ({
  bgColor,
  fgColor,
  setFgColor,
  setBgColor,
}: {
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  fgColor: string;
  setFgColor: (fgColor: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Background Color
        </label>
        <HexColorPicker
          color={bgColor}
          onChange={setBgColor}
          className="w-40"
        />
        <input
          type="text"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="mt-2 w-[200px] rounded-lg border border-gray-600 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type something..."
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Pixel Color</label>
        <HexColorPicker color={fgColor} onChange={setFgColor} />
        <input
          type="text"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
          className="mt-2 w-[200px] rounded-lg border border-gray-600 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

const QRCode = ({
  id,
  text,
  pixelColor,
  bgColor,
}: {
  id: string;
  containerClassName: string;
  text: string;
  pixelColor: string;
  bgColor: string;
}) => {
  const { Canvas } = useQRCode();
  const ref = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (width > 0) {
      return;
    }
    const widthCheckerInterval = setInterval(() => {
      if (width === 0 && !!ref.current?.clientWidth) {
        const clientWidth = ref?.current.clientWidth;
        if (clientWidth > 440) {
          setWidth(440);
        } else {
          setWidth(clientWidth - 100);
        }
        clearInterval(widthCheckerInterval);
      }
    }, 100);
    return () => clearInterval(widthCheckerInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const clientWidth = ref?.current?.clientWidth ?? Infinity;
      if (clientWidth > 440) {
        setWidth(440);
      } else {
        setWidth(clientWidth - 100);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("test", {
    width,
  });
  return (
    <div className={"flex w-full justify-center"} ref={ref as any}>
      {width === 0 ? <p className={"text-lg"}>Loading...</p> : null}
      {width !== 0 ? (
        <div id={id}>
          <Canvas
            text={text}
            options={{
              width: Math.min(ref?.current?.clientWidth ?? Infinity, 440),
              margin: 2,
              color: {
                dark: pixelColor,
                light: bgColor,
              },
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
