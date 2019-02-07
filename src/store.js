const CONSTANTS = {
    INITIAL_STATE: [{name: 'Type something cool in the input above...', url: ''}],
    SEARCHING    : [{name: 'Searching...', url: ''}],
    NO_REPOS     : [{name: 'No repos found...', url: ''}]
};

const state = {
    placeholder: 'Type the name of a repo to search and press ENTER...',
    repos      : CONSTANTS.INITIAL_STATE
};

const actions = update => {
    const searching = () => update({repos: CONSTANTS.SEARCHING});
    const setRepos  = newRepos => update({repos: newRepos.length > 0 ? newRepos : CONSTANTS.NO_REPOS});
    const noRepos   = () => update({repos: CONSTANTS.NO_REPOS});

    return {setRepos, searching, noRepos};
};

const store = {
    state,
    actions
};

export {store}