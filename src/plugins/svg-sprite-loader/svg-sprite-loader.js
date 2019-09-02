export default function () {
  const svgFiles = require.context('@/assets/icons', true, /\.svg$/)
  svgFiles.keys().forEach(svgFiles)
}
