import useThemeStore from "../store/theme";


function DarkMode() {
  const {toggleTheme } = useThemeStore();

  

  return (
      <div className='flex items-center justify-end gap-2'>
      <button
        onClick={toggleTheme}
        className="w-10 h-5 rounded-full border-2 focus:outline-none outline-none  bg-black border-black dark:border-white  dark:bg-white dark:text-white flex items-center justify-start dark:justify-end transition-colors duration-300"
      >
        <div className='w-4 h-4 rounded-full bg-white dark:bg-black'>
        </div>
      </button>

      </div>
  )
}

export default DarkMode
