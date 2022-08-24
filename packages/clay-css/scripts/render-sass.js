/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const {parentPort, workerData} = require('node:worker_threads');
const sass = require('sass');

const renderSass = (file, outFile) => {
	const results = sass.renderSync({
		file,
		outFile,
		sourceMap: true,
		sourceMapContents: true,
		sourceMapRoot: '../../',
	});

	parentPort.postMessage(results);
};

renderSass(workerData.file, workerData.outFile);
