// Jest setup for testing-library matchers
require('@testing-library/jest-dom');

// jsdom does not implement matchMedia; add a simple mock
if (typeof window !== 'undefined' && !window.matchMedia) {
	window.matchMedia = function (query) {
		return {
			matches: false,
			media: query,
			onchange: null,
			addListener: function () {},
			removeListener: function () {},
			addEventListener: function () {},
			removeEventListener: function () {},
			dispatchEvent: function () { return false; }
		};
	};
}

// Simple IntersectionObserver mock for tests
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
	class MockIntersectionObserver {
		constructor(callback) {
			this.callback = callback;
		}
		observe(element) {
			// immediately trigger as intersecting
			this.callback([{ isIntersecting: true, target: element }]);
		}
		unobserve() {}
		disconnect() {}
	}
	window.IntersectionObserver = MockIntersectionObserver;
}
