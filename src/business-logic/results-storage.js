const storageKey = 'gameResults';

class ResultsStorage {
  static addResults(newGameResults) {
    const results = ResultsStorage.fetchResults();
    results.unshift(newGameResults);
    localStorage.setItem(storageKey, JSON.stringify(results));
  }

  static fetchResults() {
    const results = localStorage.getItem(storageKey);
    if (!results) {
      return [];
    }

    return JSON.parse(results);
  }
}

export default ResultsStorage;
