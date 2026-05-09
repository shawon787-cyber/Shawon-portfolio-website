"use client";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-6 pb-6 text-center">
        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-neon/10 text-sm text-muted-foreground">
          <p className="font-mono text-center">
            © {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-neon">Md Shaon</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
