"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@radix-ui/themes";

function CarpetIcon() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton color="gray" variant="ghost" className="hover:cursor-auto">
      {theme === "dark" ? (
        <svg
          fill="white"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M357.815,148.366c4.683,0,8.477-3.795,8.477-8.477V84.728c0-4.681-3.794-8.477-8.477-8.477h-203.63    c-4.683,0-8.477,3.795-8.477,8.477v342.544c0,4.681,3.794,8.477,8.477,8.477h203.629c4.683,0,8.477-3.795,8.477-8.477V168.145    c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477v250.651H162.662V93.204h186.675v46.685    C349.338,144.57,353.133,148.366,357.815,148.366z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M407.545,0c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477    c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52    h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.932V8.477    c0-4.681-3.794-8.477-8.477-8.477s-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477    s-8.477,3.795-8.477,8.477V26.52h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.933    V8.477c0-4.681-3.794-8.477-8.477-8.477s-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477    c-4.683,0-8.477,3.795-8.477,8.477V422.45c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V43.474h286.136    v425.052H112.931v-17.821c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477v52.819    c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477    c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V485.48h20.933    v18.043c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.931v18.043c0,4.681,3.794,8.477,8.477,8.477    s8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933    v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V485.48h20.932v18.043c0,4.681,3.794,8.477,8.477,8.477    c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V8.477    C416.021,3.795,412.226,0,407.545,0z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M357.815,148.366c4.683,0,8.477-3.795,8.477-8.477V84.728c0-4.681-3.794-8.477-8.477-8.477h-203.63    c-4.683,0-8.477,3.795-8.477,8.477v342.544c0,4.681,3.794,8.477,8.477,8.477h203.629c4.683,0,8.477-3.795,8.477-8.477V168.145    c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477v250.651H162.662V93.204h186.675v46.685    C349.338,144.57,353.133,148.366,357.815,148.366z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M407.545,0c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477    c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52    h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.932V8.477    c0-4.681-3.794-8.477-8.477-8.477s-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477    s-8.477,3.795-8.477,8.477V26.52h-20.933V8.477c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477V26.52h-20.933    V8.477c0-4.681-3.794-8.477-8.477-8.477s-8.477,3.795-8.477,8.477V26.52h-20.932V8.477c0-4.681-3.794-8.477-8.477-8.477    c-4.683,0-8.477,3.795-8.477,8.477V422.45c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V43.474h286.136    v425.052H112.931v-17.821c0-4.681-3.794-8.477-8.477-8.477c-4.683,0-8.477,3.795-8.477,8.477v52.819    c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477    c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V485.48h20.933    v18.043c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.931v18.043c0,4.681,3.794,8.477,8.477,8.477    s8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933    v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V485.48h20.932v18.043c0,4.681,3.794,8.477,8.477,8.477    c4.683,0,8.477-3.795,8.477-8.477V485.48h20.933v18.043c0,4.681,3.794,8.477,8.477,8.477s8.477-3.795,8.477-8.477V8.477    C416.021,3.795,412.226,0,407.545,0z" />
            </g>
          </g>
        </svg>
      )}
    </IconButton>
  );
}

export default CarpetIcon;
