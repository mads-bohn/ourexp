function validateEntry (data) {
    const errorMessages = {};

    // title validation
    if (!data.title) {
      errorMessages.title = 'Title is required.';
    } else if (data.title.length < 2 || data.title.length > 40) {
      errorMessages.title = 'Title must be 2-40 characters long.';
    }

    // entry validation
    if (!data.text) {
      errorMessages.text = 'Entry text is required.';
    } else if (data.text.length > 65535) {
      errorMessages.text = 'Entry must be less than 65535 characters long.';
    }

    return errorMessages;
  }

  export { validateEntry };