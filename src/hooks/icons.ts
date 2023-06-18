import React, { useEffect, useRef, useState } from "react";
import { useUI } from "./uiContext";

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const {
    state: { systemColorTheme },
  } = useUI();

  useEffect(() => {
    setLoading(true);
    // dynamically import the mentioned svg icon name in props
    const importSvgIcon = async (): Promise<void> => {
      // all icons must be placed in the same directory
      // if we want that part to be configurable then instead of iconName we will send iconPath as prop
      // Added the check for systemColorTheme because I'm loading the correct icon based on the mode
      try {
        if (systemColorTheme) {
          importedIconRef.current = (
            await import(`../assets/icons/${iconName}.svg`)
          ).ReactComponent; // svgr provides ReactComponent for given svg path
        }
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
