import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    window.location.assign("https://jumpshare.com/s/N5Fpbojcdxlg9UFxBIu7");
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6 py-12">
      <div className="w-full max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <div className="mb-6 rounded-lg border border-dashed border-muted-foreground/40 bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Chef Whiskers and Mochi led you astray. Redirecting you to the fun detour now...
          </p>
        </div>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
