import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SaveableLogo = () => {
  const logoFormats = [
    { name: "PNG", path: "/brand/logo.png" },
    { name: "SVG", path: "/brand/logo.svg" },
    { name: "JPG", path: "/brand/logo.jpg" },
  ];

  const handleDownload = (path: string, format: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = `quantxlr8-logo.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-2 -ml-4">
      <img src="/brand/logo.png" alt="QuantXlr8 logo" className="h-20 w-auto object-cover object-left scale-110" style={{ clipPath: 'inset(0 15% 0 20%)' }} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Download logo"
          >
            <Download className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {logoFormats.map((format) => (
            <DropdownMenuItem
              key={format.name}
              onClick={() => handleDownload(format.path, format.name)}
            >
              Download {format.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SaveableLogo;
