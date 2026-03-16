# Cursor Setup

This project uses project-scoped Cursor skills, custom subagents, and the official MongoDB MCP server.

## Included Project Assets

Skills in `.cursor/skills/`:
- `website-ui-ux-designer`
- `stripe-js-expert`
- `firearms-training-content`
- `nextjs-api-architecture`
- `launch-seo-local-business`
- `wallin-precision-brand-context`

Subagents in `.cursor/agents/`:
- `code-reviewer`
- `ui-ux-critic`
- `stripe-architect`
- `content-compliance-reviewer`
- `verifier`
- `security-reviewer`

## MongoDB MCP Server

The project MCP config is in `.cursor/mcp.json` and uses the official MongoDB server:

```json
{
  "mcpServers": {
    "mongodb": {
      "command": "npx",
      "args": ["-y", "mongodb-mcp-server@latest"],
      "env": {
        "MDB_MCP_CONNECTION_STRING": "${env:MONGODB_ATLAS_URI}",
        "MDB_MCP_READ_ONLY": "false"
      }
    }
  }
}
```

### Requirements
- Node.js `23+`, or `22.12.0+`, or `20.19.0+`
- A MongoDB Atlas connection string
- Restart Cursor after changing `.cursor/mcp.json` or your environment variables

### Environment Variable

Set this variable in the environment Cursor can access:

```bash
export MONGODB_ATLAS_URI="your-atlas-connection-string"
```

The MongoDB MCP server itself expects `MDB_MCP_CONNECTION_STRING`. This project config maps that to `${env:MONGODB_ATLAS_URI}` so you only need to manage one project-facing variable name.

### Write-Enabled Safety

This project is intentionally configured for write-enabled MongoDB MCP access.

That means Cursor agents can perform mutations through the MongoDB MCP server if a tool call allows it. Recommended safety practices:
- use a development Atlas database first
- create least-privilege DB users where possible
- avoid pointing this at production until you are ready
- prefer backups or snapshots before schema-changing work
- ask for confirmation before destructive data operations

### Verify It Is Working

1. Restart Cursor.
2. Open Cursor settings and inspect the `Tools & MCP` section.
3. Confirm a `mongodb` server appears and is enabled.
4. In chat, ask the agent to inspect MongoDB tools or list available MongoDB resources.

### If Env Interpolation Fails

Some Cursor versions and environments can be inconsistent about `${env:...}` resolution in `mcp.json`.

If the `mongodb` server appears but fails to start:
1. confirm `MONGODB_ATLAS_URI` is available to the Cursor app, not just your shell
2. fully restart Cursor
3. if needed, temporarily replace `${env:MONGODB_ATLAS_URI}` in `.cursor/mcp.json` with the literal connection string on your machine

If you do the literal-string fallback, treat `.cursor/mcp.json` as sensitive and avoid committing secrets.

## How To Use The Project Specialists

- Ask for site copy, metadata, or page planning that reflects the real business to trigger `wallin-precision-brand-context`.
- Ask for page planning or wireframes to trigger `website-ui-ux-designer`.
- Ask for payment architecture or Stripe implementation guidance to trigger `stripe-js-expert` or `stripe-architect`.
- Ask for copy review or course-page writing to trigger `firearms-training-content` or `content-compliance-reviewer`.
- Ask for code review to trigger `code-reviewer`.
- Ask for implementation verification to trigger `verifier`.
- Security-sensitive work should trigger `security-reviewer`.

## Business Context Used

The current project context was tuned against the public Wallin Precision Facebook page:
- business name: `Wallin Precision`
- location: `Unionville, NC`
- intro: `Beginner-friendly & advanced firearms training | Concealed carry training | Safe. Confident. Capable.`
- contact methods shown publicly: phone and email
- current online conversion appears to happen through Facebook messaging, email, and manual class promotion
- confirmed brand line: `Safe. Confident. Capable.`
- confirmed primary offer: concealed carry training
- confirmed website CTA strategy: support both online booking and inquiry fallback

Use that as starting context, but verify publish-critical facts before launch.
