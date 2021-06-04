/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useThemeUI, Button } from 'theme-ui'

const ThemeButton = (props) => {
	const { theme: { rawColors }, setColorMode } = useThemeUI()

	return Object.entries(rawColors?.modes).map(([mode, values]) =>
    <Button
			{...props}
      sx={{ bg: values.paper, color: values.text, ml: 3 }}
      onClick={() => setColorMode(mode)}
    >
      {mode}
		</Button>
  )
}

export default ThemeButton
