import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6 py-12">
      <div className="w-full max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <div className="mb-6 rounded-lg border border-dashed border-muted-foreground/40 bg-background p-6">
          <p className="mb-4 text-sm text-muted-foreground">
            Chef Whiskers and Mochi led you astray. Tap the link below for a fun detour while you
            find your way back.
          </p>
          <a
            href="https://jumpshare.com/s/N5Fpbojcdxlg9UFxBIu7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Open the fun 404 link
          </a>
        </div>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
