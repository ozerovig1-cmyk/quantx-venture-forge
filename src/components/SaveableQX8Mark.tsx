import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SaveableQX8Mark = () => {
  const logoFormats = [
    { name: "SVG (Light)", path: "/brand/qx8-mark.svg" },
    { name: "SVG (Dark)", path: "/brand/qx8-mark-dark.svg" },
  ];

  const handleDownload = (path: string, format: string) => {
    const link = document.createElement("a");
    link.href = path;
    const fileName = format.toLowerCase().includes("dark") 
      ? "qx8-mark-dark.svg" 
      : "qx8-mark.svg";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-2 group">
      <img 
        src="/brand/qx8-mark.svg" 
        alt="QX8 mark" 
        className="h-12 w-auto" 
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Download QX8 mark"
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

export default SaveableQX8Mark;
