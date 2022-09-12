<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use Carbon\Carbon;

class App extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        '*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'siteName' => $this->siteName(),
            'history' => $this->history()
        ];
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function siteName()
    {
        return get_bloginfo('name', 'display');
    }

    public function history()
    {
      $dtCreateblog = Carbon::create(2014, 7, 22, 0, 0, 0, 'Asia/Seoul');
      $dtNow = Carbon::now('Asia/Seoul');

      $days = $dtNow->diffInDays($dtCreateblog);
      $month = $dtNow->diffInMonths($dtCreateblog) % 12;
      $year = $dtNow->diffInYears($dtCreateblog);

      return "{$year}년 {$month}개월째 ({$days}일)";
    }
}
