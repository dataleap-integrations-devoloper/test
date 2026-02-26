# Security Patch Notes

## Vulnerability
- JWT token validation bypass
- Brute force attack vector on login endpoint

## Fix Applied
- Patched JWT validation logic
- Added rate limiting (max 5 attempts / 15 min)
- Enforced HTTPS-only session cookies
- Bumped vulnerable dependencies
