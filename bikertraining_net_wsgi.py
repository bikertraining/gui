"""
WSGI config for Biker Training project.

It exposes the WSGI callable as a module-level variable named ``application``.
"""

def application(environ, start_response):
    if environ.get('PATH_INFO') == '/':
        start_response('301 Moved Permanently', [ ('Location', '/#/home') ])
    elif environ.get('PATH_INFO') == '/contact':
        start_response('301 Moved Permanently', [ ('Location', '/#/contact') ])
    elif environ.get('PATH_INFO') == '/courses':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses') ])
    elif environ.get('PATH_INFO') == '/courses/brc':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses/brc') ])
    elif environ.get('PATH_INFO') == '/courses/erc':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses/erc') ])
    elif environ.get('PATH_INFO') == '/courses/3wbrc':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses/3wbrc') ])
    elif environ.get('PATH_INFO') == '/courses/kickstart':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses/kickstart') ])
    elif environ.get('PATH_INFO') == '/courses/private':
        start_response('301 Moved Permanently', [ ('Location', '/#/courses/private') ])
    elif environ.get('PATH_INFO') == '/faq':
        start_response('301 Moved Permanently', [ ('Location', '/#/faq') ])
    elif environ.get('PATH_INFO') == '/payment':
        start_response('301 Moved Permanently', [ ('Location', '/#/payment') ])
    elif environ.get('PATH_INFO') == '/privacy':
        start_response('301 Moved Permanently', [ ('Location', '/#/privacy') ])
    elif environ.get('PATH_INFO') == '/register':
        start_response('301 Moved Permanently', [ ('Location', '/#/register') ])
    elif environ.get('PATH_INFO') == '/schedule':
        start_response('301 Moved Permanently', [ ('Location', '/#/schedule') ])
    elif environ.get('PATH_INFO') == '/tos':
        start_response('301 Moved Permanently', [ ('Location', '/#/tos') ])
    elif environ.get('PATH_INFO') == '/waivers':
        start_response('301 Moved Permanently', [ ('Location', '/Waivers.pdf') ])
    else:
        start_response('301 Moved Permanently', [ ('Location', '/#/error/404') ])

    return [1]