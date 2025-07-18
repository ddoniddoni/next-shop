import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "nope-nr",
  project: "repairshop",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
  widenClientFileUpload: true,
  disableLogger: true,
});
