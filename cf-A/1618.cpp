#include<bits/stdc++.h>
using namespace std;
//https://codeforces.com/problemset/problem/1618/A
int main(){
    //freopen("in.txt","r",stdin);
    int t,i=0;
    long long int b[7], sum=0;
    map<int,int> freq;
    vector<int> vec(3);

    cin>>t;
    while(t--){
        i=0;
        while(i!=7){
            cin>>b[i];
            freq[b[i]]++;
            i++;
        }
        vec[0] = b[0];
        vec[1] = b[1];
        sum = b[0]+b[1]+b[2];

        if(sum == b[6])
            vec[2] = b[2];
        else{
            sum-=b[2];
            if(freq[b[6]-sum]){
                vec[2] = b[6]-sum;
            }
        }
        cout<<vec[0]<<" "<<vec[1]<<" "<<vec[2]<<"\n";
    }
    return 0;
}