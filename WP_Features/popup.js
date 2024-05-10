// Function to update the feature based on the toggle switch state
function updateFeatureState(state) {
    // Your code to enable or disable the extra feature based on the state
}

// Function to handle changes in the toggle switch state
function handleToggleChange() {
    const toggleSwitch = document.getElementById('feature-toggle');
    const state = toggleSwitch.checked;
    updateFeatureState(state);

    // Save the state to Chrome storage
    chrome.storage.sync.set({ featureEnabled: state });
}

// Function to initialize the toggle switch state
function initializeToggleState() {
    // Retrieve the toggle switch state from Chrome storage
    chrome.storage.sync.get('featureEnabled', function (data) {
        const state = data.featureEnabled || false; // Default to false if state is not set
        const toggleSwitch = document.getElementById('feature-toggle');
        toggleSwitch.checked = state;
        updateFeatureState(state);
    });
}

// Add event listener to the toggle switch
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('chat-panel');
    alert(toggleSwitch.value)
    // toggleSwitch.addEventListener('change', handleToggleChange);
    // initializeToggleState();
});
