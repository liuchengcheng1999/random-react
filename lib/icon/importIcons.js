let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../imgs/', true, /\.svg$/))
} catch (error) {
}