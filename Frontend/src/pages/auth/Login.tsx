import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import logo from "@/assets/dp6.png";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mockUser = {
      id: "1",
      name: "Admin",
      email,
      role: "admin" as const,
    };

    login(mockUser, "fake-token");

    navigate("/dashboard/admin");
  };

  const handleGoogleLogin = () => {
    alert("Google Auth backend not connected yet");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f3ef] text-[#202020]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <section className="relative hidden overflow-hidden bg-[#202020] px-10 py-10 text-white lg:flex lg:w-[46%] lg:flex-col xl:px-16">
          <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full border border-primary/30" />
          <div className="absolute right-20 top-1/2 h-3 w-3 rotate-45 bg-primary" />
          <div className="absolute bottom-24 left-1/3 h-2 w-2 rounded-full bg-white/40" />

          <div className="relative z-10 my-auto max-w-lg py-16">
            <Link to="/" className="mb-8 inline-flex">
              <img src={logo} alt="Deon Plaza" className="h-32 w-32 translate-y-3 object-contain" />
            </Link>
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
              <Sparkles className="h-4 w-4 text-primary" />
              The plaza desk
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight xl:text-6xl">
              Everything your plaza needs, in one place.
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/60">
              Sign in to manage appointments, services, and the everyday details that keep Deon Plaza moving.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3">
              <div className="border-l border-primary pl-4">
                <p className="text-2xl font-bold">10+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">Services</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="text-2xl font-bold">2014</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">Serving since</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-xs text-white/45">
            <ShieldCheck className="h-4 w-4 text-primary" />
            A trusted space for the community
          </div>
        </section>

        <main className="flex flex-1 flex-col px-6 py-7 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-[#202020]/55 transition-colors hover:text-primary lg:invisible">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            <Link to="/" className="group hidden items-center gap-2 text-sm font-medium text-[#202020]/55 transition-colors hover:text-primary lg:inline-flex">
              Back to site
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
            <div className="mb-10 lg:hidden">
              <img src={logo} alt="Deon Plaza" className="h-28 w-28 translate-y-3 object-contain" />
            </div>

            <div className="mb-9">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Welcome back</p>
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Sign in to continue.</h2>
              <p className="mt-4 text-base leading-6 text-[#202020]/55">Access your Deon Plaza portal with your account details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-14 w-full rounded-xl border border-[#202020]/15 bg-white px-4 text-base outline-none transition-all placeholder:text-[#202020]/30 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                  <button type="button" className="text-xs font-semibold text-primary transition-colors hover:text-[#202020]">Forgot password?</button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-14 w-full rounded-xl border border-[#202020]/15 bg-white px-4 pr-12 text-base outline-none transition-all placeholder:text-[#202020]/30 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#202020]/40 transition-colors hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-3 text-sm text-[#202020]/55">
                <input type="checkbox" className="h-4 w-4 rounded border-[#202020]/20 accent-primary" />
                Keep me signed in
              </label>

              <button type="submit" className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 font-semibold text-white shadow-[0_12px_24px_-10px_hsl(6_78%_57%/0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#c73e32] hover:shadow-[0_16px_30px_-10px_hsl(6_78%_57%/0.8)]">
                Sign in
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#202020]/30">
              <span className="h-px flex-1 bg-[#202020]/10" />
              or continue with
              <span className="h-px flex-1 bg-[#202020]/10" />
            </div>

            <button onClick={handleGoogleLogin} className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#202020]/15 bg-white font-semibold transition-all hover:-translate-y-0.5 hover:border-[#202020]/30 hover:shadow-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#202020]/15 text-sm font-bold">G</span>
              Continue with Google
            </button>

            <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-[#202020]/40">
              <Globe2 className="h-4 w-4" />
              Secure access for Deon Plaza administrators
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;