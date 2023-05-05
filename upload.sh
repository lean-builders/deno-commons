#!/bin/zsh

aws s3 cp src/narrowCopy.ts s3://leanbuilders-homepage/deno-commons/narrowCopy.ts
aws s3 cp src/securityHandlers.ts s3://leanbuilders-homepage/deno-commons/securityHandlers.ts
aws s3 cp src/languages.ts s3://leanbuilders-homepage/deno-commons/languages.ts
aws s3 cp src/translateWithGoogleCloudAPI.ts s3://leanbuilders-homepage/deno-commons/translateWithGoogleCloudAPI.ts
