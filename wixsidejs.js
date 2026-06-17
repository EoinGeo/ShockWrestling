import wixData from 'wix-data';

$w.onReady(() => {
  const htmlComponent = $w('#html1');
  console.log('HTML component:', htmlComponent);

  if (!htmlComponent) {
    console.error('HTML component not found');
    return;
  }

  htmlComponent.onMessage(async (event) => {
    console.log('Received event:', event);
    const data = event.data;
    if (!data) return;

    if (data.type === 'HTML_READY') {
      console.log('HTML component ready');
      return;
    }

    if (data.type !== 'SUBMIT_PREDICTION') return;

    try {
      const result = await wixData.insert('WorldCupPredictions', data.payload);
      console.log('Saved:', result);
      htmlComponent.postMessage({
        type: 'SAVE_SUCCESS',
        id: result._id
      });
    } catch (err) {
      console.error('Save failed:', err);
      htmlComponent.postMessage({
        type: 'SAVE_ERROR',
        message: err.message
      });
    }
  });
});