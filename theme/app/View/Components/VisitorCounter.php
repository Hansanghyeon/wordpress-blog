<?php

/**
 * 참고
 * https://ga-dev-tools.web.app/query-explorer/
 * https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/service-php
 *
 * TODO: realtime
 * 참고
 * https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema
 * https://developers.google.com/analytics/devguides/reporting/realtime/v3/reference/data/realtime/get?apix_params=%7B%22ids%22%3A%22ga%3A246095399%22%2C%22metrics%22%3A%22rt%3AactiveUsers%22%2C%22max-results%22%3A1%7D#examples
 */

namespace App\View\Components;

use Google_Client;
use Roots\Acorn\View\Component;

use Google\Service\AnalyticsReporting;
use Google\Service\AnalyticsReporting\DateRange;
use Google\Service\AnalyticsReporting\Metric;
use Google\Service\AnalyticsReporting\ReportRequest;
use Google\Service\AnalyticsReporting\GetReportsRequest;
use Google\Service\AnalyticsReporting\Dimension;

class VisitorCounter extends Component
{
    public $VIEW_ID = "246095399";

    public $analytics;
    public $today;
    public $allday;
    public $yesterday;

    public $error = false;

    public function initializeAnalytics()
    {
        $KEY_FILE_LOCATION = get_theme_file_path('/key/log-278509-973987697d36.json');

        // Create and configure a new client object.
        $client = new Google_Client();
        $client->setApplicationName("방문자 카운터");
        $client->setAuthConfig($KEY_FILE_LOCATION);
        $client->setScopes(['https://www.googleapis.com/auth/analytics.readonly']);
        $this->analytics = new AnalyticsReporting($client);
    }

    public function getReport($startDate = 'today', $endDate = 'today')
    {
        // Create the DateRange object.
        $dateRange = new DateRange();
        $dateRange->setStartDate($startDate);
        $dateRange->setEndDate($endDate);

        // Set the dimensions
        $dimension = new Dimension();
        $dimension->setName("ga:userType");

        // Create the Metrics object.
        $sessions = new Metric();
        $sessions->setExpression("ga:users");

        // Create the ReportRequest object.
        $request = new ReportRequest();
        $request->setViewId($this->VIEW_ID);
        $request->setDateRanges($dateRange);
        $request->setMetrics(array($sessions));
        $request->setDimensions(array($dimension));

        $body = new GetReportsRequest();
        $body->setReportRequests(array($request));
        $response = $this->analytics->reports->batchGet($body);
        return $response[0]['data']['totals'][0]['values'][0];
    }

    public function __construct()
    {
        try {
            $this->initializeAnalytics();
            $this->allday = $this->getReport('2017-07-22', 'today');
            $this->today = $this->getReport();
            $this->yesterday = $this->getReport('yesterday', 'yesterday');
        } catch (\Throwable $th) {
            $this->error = true;
        }
    }
    public function render()
    {
        if (!$this->error) {
            return $this->view('components.visitor-counter');
        }
    }
}
