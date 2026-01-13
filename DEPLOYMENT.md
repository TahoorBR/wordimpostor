# 🚀 Deployment Guide - Word Impostor Game

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application. Follow these steps:

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   cd c:\Users\muhammadtahoor\Desktop\seeker\word-impostor
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Done!** 🎉
   - Your app will be live at: `https://your-app-name.vercel.app`
   - Share the link with friends and family!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd c:\Users\muhammadtahoor\Desktop\seeker\word-impostor
   vercel
   ```

4. **Follow the prompts** and your app will be deployed!

## Post-Deployment Checklist

- ✅ Test creating a room
- ✅ Test joining with room code
- ✅ Test on mobile device
- ✅ Test with multiple players
- ✅ Verify profile persistence works
- ✅ Check that rooms refresh properly

## Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Environment Variables (Future)

If you add features that need environment variables:
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Sharing Your Game

Once deployed, you can share your game in two ways:

1. **Direct Link**: Share your Vercel URL
   - Example: `https://word-impostor.vercel.app`

2. **Room Codes**: Players can:
   - Visit your site
   - Create a profile
   - Join using the 6-letter room code

## Performance Tips

- **Auto-scaling**: Vercel automatically scales with traffic
- **Edge Network**: Your app is served from the closest location to users
- **Caching**: Static assets are automatically cached

## Monitoring

- View deployment logs in Vercel dashboard
- Check analytics for player activity
- Monitor function execution times

## Troubleshooting

### Issue: Players can't connect
- **Solution**: Check that the deployment is successful on Vercel

### Issue: Data not persisting
- **Solution**: Ensure cookies are enabled in browser settings

### Issue: Room not found
- **Solution**: Rooms auto-expire after 2 hours of inactivity (by design)

## Future Enhancements

To add real-time features with WebSockets:
1. Consider using Pusher, Ably, or Socket.io
2. Add environment variables for API keys
3. Update game logic to use real-time events

## Support

For issues or questions:
- Check the README.md file
- Review the code comments
- Test locally first with `npm run dev`

---

**Happy Gaming! 🎮🎭**
