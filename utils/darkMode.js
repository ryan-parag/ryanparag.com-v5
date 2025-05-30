export const checkMode = (mode, systemTheme) => {
  if(mode === 'dark') {
    return true;
  } else if(mode === 'system') {
      if(systemTheme === 'dark') {
        return true;
      } else {
        return false;
      }
  } else {
    return false;
  }
}