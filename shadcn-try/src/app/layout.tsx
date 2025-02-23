import { ThemeProvider } from "@/components/ui/theme-provider";

interface RootLayoutProps {
   children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <head />
         <body>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}

